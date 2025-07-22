import axios from "axios";

const API_KEY = "SUA_API_KEY";
const BASE_URL = "https://api.apify.com/v2/actor-tasks/YOUR-TASK-ID/run-sync-get-dataset-items?token=" + API_KEY;

export async function getImoveis({ estado, cidade, financiavel }) {
  const response = await axios.get(BASE_URL);

  const imoveis = response.data.map((item) => {
    const podeFinanciar = item.minimumSaleValue <= item.evaluationValue;

    return {
      id: item.id,
      codigo_caixa: item.code,
      estado: item.state,
      cidade: item.city,
      bairro: item.neighborhood,
      tipo_imovel: item.type,
      modalidade: item.modality,
      endereco: item.address,
      valor_avaliado: item.evaluationValue,
      lance_minimo: item.minimumSaleValue,
      financiavel: podeFinanciar,
      imagem_url: item.image,
    };
  });

  return imoveis.filter((i) =>
    (!estado || i.estado === estado) &&
    (!cidade || i.cidade === cidade) &&
    (financiavel === undefined || i.financiavel === (financiavel === "true"))
  );
}
