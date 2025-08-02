import dermato from "../assets/images/dermatohero.jpeg"
import trico from "../assets/images/trico.jpeg"
import medic from "../assets/images/medichero.jpg"

export const specialties = [
  {
    slug: "dermatologia",
    name: "Dermatologia",
    description:
      "A Dermatologia da Clínica Health oferece cuidados completos para a pele, unindo tecnologia de ponta, procedimentos estéticos avançados e acompanhamento médico altamente especializado. É aqui que ciência e beleza se encontram para revelar sua melhor versão.",
    image: dermato,
    treatments: [
      {
        title: "Estética Facial",
        description: "Protocolos personalizados para rejuvenescimento, textura e luminosidade da pele.",
      },
      {
        title: "Dermatologia Clínica",
        description: "Tratamento de condições como acne, melasma, rosácea e outras alterações cutâneas.",
      },
      {
        title: "Dermatologia Cirúrgica",
        description: "Procedimentos como retirada de sinais, biópsias e correções minimamente invasivas.",
      },
      {
        title: "Toxina Botulínica",
        description: "Suavização de linhas de expressão e prevenção do envelhecimento com precisão.",
      },
      {
        title: "Bioestimuladores",
        description: "Estímulo à produção natural de colágeno para firmeza e sustentação da pele.",
      },
      {
        title: "Skinbooster",
        description: "Hidratação profunda com ácido hialurônico para revitalização da pele.",
      },
      {
        title: "Microagulhamento",
        description: "Técnica de indução de colágeno para melhora de cicatrizes, poros e textura.",
      },
      {
        title: "Peeling Químico",
        description: "Renovação celular controlada para manchas, oleosidade e uniformização.",
      },
      {
        title: "Intradermoterapia",
        description: "Aplicação de ativos diretamente na pele para tratar flacidez, gordura localizada e manchas.",
      },
      {
        title: "LED Terapia",
        description: "Tecnologia de luz para regeneração celular, acne, inflamação e viço da pele.",
      },
      {
        title: "Fios PDO",
        description: "Fios absorvíveis para lifting facial não cirúrgico e estímulo de colágeno.",
      },
      {
        title: "Preenchimento Facial",
        description: "Reposição de volume e contorno com naturalidade e harmonia.",
      },
      {
        title: "Preenchimento Glúteo",
        description: "Modelagem e projeção com segurança e resultados elegantes.",
      },
      {
        title: "Laser Solon",
        description: "Tecnologia de última geração para manchas, rejuvenescimento e depilação.",
      },
      {
        title: "Ultrassom Atria",
        description: "Ultrassom microfocado para lifting facial e melhora da flacidez.",
      },
    ],
  },
  {
    slug: "tricologia",
    name: "Tricologia",
    description:
      "A Tricologia da Clínica Health é dedicada ao diagnóstico e tratamento especializado dos cabelos e couro cabeludo. Com tecnologias avançadas e abordagem científica, oferecemos soluções personalizadas para alopecia, queda capilar e saúde do couro cabeludo, devolvendo confiança e bem-estar aos nossos pacientes.",
    image: trico,
    treatments: [
      {
        title: "MMP (Microinfusão de Medicamentos)",
        description: "Aplicação direta de medicamentos no couro cabeludo através de microinjeções para tratamento eficaz da alopecia e estimulação do crescimento capilar.",
      },
      {
        title: "PRP (Plasma Rico em Plaquetas)",
        description: "Terapia regenerativa que utiliza fatores de crescimento do próprio paciente para estimular folículos capilares e promover o crescimento de fios saudáveis.",
      },
      {
        title: "Mesoterapia",
        description: "Técnica que combina vitaminas, minerais e ativos específicos aplicados no couro cabeludo para nutrição profunda e fortalecimento capilar.",
      },
      {
        title: "LED Capilar (Capellux)",
        description: "Terapia com luz de baixa intensidade que estimula a circulação sanguínea e ativa o metabolismo celular dos folículos capilares.",
      },
      {
        title: "Biópsia do Couro Cabeludo",
        description: "Exame diagnóstico preciso para identificar causas específicas de alopecia e determinar o melhor protocolo de tratamento personalizado.",
      },
      {
        title: "Tratamento Clínico para Alopecia e Inflamações do Couro Cabeludo",
        description: "Protocolos médicos especializados para diferentes tipos de alopecia, dermatite seborreica, psoríase e outras condições inflamatórias do couro cabeludo.",
      },
    ],
  },
  {
    slug: "medicina-clinica-hormonal",
    name: "Medicina Preventiva, Endocrinologia, Emagrecimento e Performance",
    description:
      "Na Clínica Health, oferecemos um cuidado médico completo e personalizado, com foco em prevenir doenças, restaurar o equilíbrio hormonal, promover o emagrecimento saudável e potencializar a performance física. Sob a supervisão do Dr. Rafael Ferreira Carrasco (CRM-SP 193.321), médico com sólida formação em nutrologia, endocrinologia e saúde esportiva, cada tratamento é desenhado com base em exames, evidências científicas e nas metas individuais de cada paciente.\n\nSeja para emagrecer, tratar disfunções hormonais, melhorar a qualidade de vida ou atingir o máximo desempenho físico, aqui você encontra protocolos modernos, seguros e com acompanhamento contínuo.\n\nEmagrecimento, Obesidade e Resistência Insulínica\n\nProtocolos médicos completos para perda de peso eficaz, segura e duradoura. O foco está na correção da resistência insulínica, modulação do metabolismo e controle do apetite. Utilizamos medicações modernas como a Semaglutida (Ozempic®️) e a Tirzepatida (Mounjaro®️), aliadas a ajustes hormonais e acompanhamento nutricional individualizado.",
    image: medic,
    treatments: [
      {
        title: "SOP (Síndrome dos Ovários Policísticos)",
        description: "Tratamento integrado da SOP com foco na regularização dos ciclos menstruais, controle da resistência insulínica, redução de sintomas como acne e oleosidade e melhora da fertilidade. A abordagem inclui modulação hormonal, ajustes nutricionais e suporte medicamentoso, conforme o perfil de cada paciente",
      },
      {
        title: "Pós-menopausa e Climatério",
        description: "Acompanhamento clínico e hormonal durante a transição da menopausa. Utilizamos protocolos com reposição hormonal, quando indicada, e estratégias complementares para aliviar sintomas como ondas de calor, insônia, irritabilidade e perda de libido, com foco em longevidade, prevenção e vitalidade feminina",
      },
      {
        title: "Obesidade, Emagrecimento e Resistência Insulínica",
        description: "Protocolos médicos completos para perda de peso eficaz, segura e duradoura. O foco está na correção da resistência insulínica, modulação do metabolismo e controle do apetite. Utilizamos medicações modernas como a Semaglutida (Ozempic®️) e a Tirzepatida (Mounjaro®️), aliadas a ajustes hormonais e acompanhamento nutricional individualizado.",
      },
      {
        title: "Performance Esportiva",
        description: "Avaliação e otimização hormonal e nutricional para atletas e praticantes de atividade física. Protocolos personalizados para ganho de massa muscular, melhora da recuperação, aumento da energia e prevenção de lesões. Sempre com foco em performance, saúde e longevidade esportiva.",
      },
      {
        title: "Lipedema",
        description: "Abordagem clínica moderna e multidisciplinar para diagnóstico e tratamento do lipedema. O protocolo inclui modulação hormonal, controle inflamatório, suporte nutricional e orientações sobre terapias físicas, com o objetivo de aliviar dor, reduzir edema e melhorar funcionalidade e autoestima.",
      },
      {
        title: "Reposição Hormonal",
        description: "Terapias hormonais personalizadas para homens e mulheres, indicadas para repor deficiências hormonais com segurança e eficácia. O foco está no bem-estar, libido, cognição, disposição e prevenção de doenças associadas ao envelhecimento hormonal, sempre com monitoramento rigoroso.",
      },
      {
        title: "Tratamento Clínico e Hormonal Tireoidiano",
        description: "Tratamento completo das disfunções tireoidianas, incluindo hipotireoidismo, hipertireoidismo e tireoidite de Hashimoto, com foco em sintomatologia, metabolismo, energia e qualidade de vida. Avaliação clínica além dos exames laboratoriais convencionais",
      },
      {
        title: "Protocolos de Emagrecimento com Semaglutida (Ozempic®️) e a Tirzepatida (Mounjaro®️)",
        description: "Utilização de análogos de GLP-1 como parte de protocolos personalizados para emagrecimento, controle da resistência insulínica e melhora do metabolismo. O tratamento é feito com acompanhamento médico contínuo, ajuste de doses, monitoramento de efeitos colaterais e alinhamento com plano alimentar e estratégias hormonais.",
      },
      {
        title: "Suplementação Injetável: Vitamina D e Complexo B",
        description: "Reposição rápida e eficaz de nutrientes essenciais como Vitamina D, Vitamina B12 e outros componentes do complexo B. Indicada para melhorar imunidade, disposição, foco mental, recuperação muscular e bem-estar geral, especialmente em casos de deficiência comprovada",
      },
      {
        title: "Implanon®️",
        description: "Inserção e acompanhamento do implante contraceptivo subdérmico, com orientação médica completa sobre funcionamento, efeitos colaterais, duração do método e possíveis ajustes durante o uso. Avaliação individualizada de indicação conforme perfil hormonal e estilo de vida",
      },
    ],
  },
];