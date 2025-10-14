const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await prisma.complaint.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch complaints' });
  }
};

exports.createComplaint = async (req, res) => {
  const { title, description, userId } = req.body;
  try {
    const complaint = await prisma.complaint.create({
      data: {
        title,
        description,
        userId
      },
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });
    res.status(201).json(complaint);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create complaint' });
  }
};

exports.updateComplaint = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const complaint = await prisma.complaint.update({
      where: { id: parseInt(id) },
      data: { status },
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });
    res.json(complaint);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update complaint' });
  }
};