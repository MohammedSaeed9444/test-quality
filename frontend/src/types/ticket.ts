export type TicketReason = "Harassment" | "Drop" | "Bad behavior" | "Took extra money";
export type City = "Baghdad" | "Basra" | "Karbala";
export type ServiceType = "Eco" | "Plus";
export type AgentName = "Ahmed" | "Jack";

export interface Ticket {
  id: string;
  tripId: string;
  tripDate: Date;
  driverId: number;
  reason: TicketReason;
  city: City;
  serviceType: ServiceType;
  customerPhone: string;
  agentName: AgentName;
  createdAt: Date;
}
