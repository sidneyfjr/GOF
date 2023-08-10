/*
Considere um exemplo onde você está desenvolvendo um sistema de geração de relatórios. 
Cada relatório pode ter diferentes seções, como cabeçalho, corpo e rodapé, e essas seções 
podem conter diferentes tipos de conteúdo, como texto, imagens e tabelas.
Usar o padrão Builder nesse caso ajuda a criar relatórios personalizados com configurações 
específicas, sem ter que criar manualmente todas as partes e configurações do relatório.

Neste exemplo, a classe Report representa o objeto complexo que é o relatório final. 
A classe ReportBuilder é responsável por construir o relatório passo a passo, 
adicionando seções como cabeçalho, corpo e rodapé. O método getResult() retorna o relatório 
completo após todas as configurações.

Usar o padrão Builder nesse cenário ajuda a criar relatórios complexos de forma modular, 
permitindo que você adicione ou remova partes do relatório conforme necessário. 
Isso torna a criação e configuração de objetos complexos mais flexível e legível, 
ao mesmo tempo que mantém o código organizado e fácil de entender.
*/

class Report {

    constructor() {
      this.sections = [];
    }
  
    addSection(section) {
      this.sections.push(section);
    }
  
    show() {
      console.log("Report Sections:");
      this.sections.forEach((section, index) => {
        console.log(`Section ${index + 1}: ${section}`);
      });
    }
  }
  
  class ReportBuilder {

    constructor() {
      this.report = new Report();
    }
  
    buildHeader(text) {
      this.report.addSection(`Header: ${text}`);
    }
  
    buildBody(text) {
      this.report.addSection(`Body: ${text}`);
    }
  
    buildFooter(text) {
      this.report.addSection(`Footer: ${text}`);
    }
  
    getResult() {
      return this.report;
    }
  }
  
  // Exemplo de uso
  const reportBuilder = new ReportBuilder();
  reportBuilder.buildHeader("Monthly Sales Report");
  reportBuilder.buildBody("Total sales: $100000");
  reportBuilder.buildFooter("Generated on: 2023-08-06");
  
  const report = reportBuilder.getResult();
  
  report.show();
  