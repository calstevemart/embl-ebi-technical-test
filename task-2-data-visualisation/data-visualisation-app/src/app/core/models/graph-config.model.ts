/**
 * Interface to represent the configuration for a single graph
 */
export interface IndividualGraphConfig {
    name: string;
    visible: boolean;
    xAxis: string;
    yAxis: string;
}

/**
 * Interface to represent all configuration options for graph types.
 */
export interface GraphConfig {
    configOptions: IndividualGraphConfig[];
}