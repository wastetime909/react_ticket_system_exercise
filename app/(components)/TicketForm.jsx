"use client";

import { useRouter } from "next/navigation";
import React, {useState} from "react";

const TicketForm = () => {
    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Hardware Problem",
    };
    const [formData, setFormData] = useState(startingTicketData);

  return 
  <div className="flex justify-center">
    <form>
        <h3>Create Your Ticket</h3>
        
    </form>
  </div>
}

export default TicketForm