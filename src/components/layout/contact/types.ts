export type AlertMessage = {
  id: number;
  title: string;
  description: string;
  isExiting: boolean;
};

export type AlertPayload = Omit<AlertMessage, "id" | "isExiting">;
