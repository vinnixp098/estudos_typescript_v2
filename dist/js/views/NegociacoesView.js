import { View } from "./View.js";
export class NegociacoesView extends View {
    template(models) {
        return `
        
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody> 
                        ${models
            .lista()
            .map((negociacao) => {
            return `
                                <tr>
                                    <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                    <td>${negociacao.volume}</td>
                                </tr>
                            `;
        })
            .join("")}
                        
                </tbody>
            </table>
        
        `;
    }
}
