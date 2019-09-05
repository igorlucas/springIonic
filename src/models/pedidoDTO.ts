import { RefDTO } from "./refDTO";

import { PagamentoDTO } from "./pagamentoDTO";

import { ItemPedidoDTO } from "./itemPedidoDTO";

export interface PedidoDTO {
    cliente: RefDTO;
    enderecoDeEntrega: RefDTO;
    pagamento: PagamentoDTO;
    itens: ItemPedidoDTO[];
}