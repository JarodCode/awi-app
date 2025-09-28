export interface LogEntry {
    id: string,
    timestamp: Date,
    message: string,
    scope?: string
}
