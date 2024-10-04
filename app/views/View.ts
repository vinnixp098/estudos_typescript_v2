export abstract class View<T> {
  protected elemento: HTMLElement;
  private scape = false;

  constructor(seletor: string, scape?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw new Error("Elemento não encontrado");
    }
    if (scape) {
      this.scape = scape;
    }
  }
  public update(model: T) {
    let template = this.template(model);
    if (this.scape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
    }
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
