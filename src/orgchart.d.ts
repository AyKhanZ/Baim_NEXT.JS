declare module "orgchart" {
  interface OrgChartOptions {
    mouseScrool?: string;
    nodeBinding?: { [key: string]: string };
    enableDragDrop?: boolean;
    nodes: { id: number; pid?: number; name: string }[];
    // Другие опции, поддерживаемые OrgChart
  }

  class OrgChart {
    constructor(container: HTMLElement | string, options: OrgChartOptions);
    clear(): void;
    // Другие методы, поддерживаемые OrgChart
  }

  export default OrgChart;
}
