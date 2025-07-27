import React from "react";
import { FaMoneyBillWave, FaCreditCard, FaPercent, FaClock } from "react-icons/fa";

const benefits = [
  {
    icon: <FaMoneyBillWave className="text-[#F27E7E] text-2xl" />,
    title: "5% OFF NO PIX",
    subtitle: "Desconto no pagamento antecipado",
    highlight: true,
  },
  {
    icon: <FaCreditCard className="text-[#F27E7E] text-2xl" />,
    title: "10X SEM JUROS",
    subtitle: "Para compras a partir de R$500,00",
  },
  {
    icon: <FaPercent className="text-[#F27E7E] text-2xl" />,
    title: "DESCONTOS ESPECIAIS",
    subtitle: "Planos e pacotes promocionais",
  },
  {
    icon: <FaClock className="text-[#F27E7E] text-2xl" />,
    title: "ATENDIMENTO PERSONALIZADO",
    subtitle: "Agendamento sem burocracia",
  },
];

function PaymentBenefits() {
  return (
    <section className="bg-[#f2f2f2] mt-24 w-full py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-center">
        {benefits.map((item, index) => (
          <div key={index} className="flex items-center gap-4 min-w-[220px]">
            {item.icon}
            <div className="text-left">
              <h4
                className={`text-sm font-semibold ${
                  item.highlight ? "text-[#F27E7E] bg-[#FDEDED] px-2 py-1 rounded-full inline-block" : "text-[#F27E7E]"
                }`}
              >
                {item.title}
              </h4>
              <p className="text-sm text-gray-800">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PaymentBenefits;