import { Injectable, signal } from '@angular/core';
import { LogEntry } from './log-entry';

@Injectable({
  providedIn: 'root'
})

export class LoggingService {
  private readonly _entries = signal<LogEntry[]>([])
  readonly entries = this._entries.asReadonly()

  public log(message: string, scope?: string): void {
    let newEntry: LogEntry = {
      id: crypto.randomUUID(),
      timestamp: new Date(),
      message: message,
      scope: scope
    } 
    this._entries.update(logs => [...logs, newEntry])
  }

  public clear(): void {
    this._entries.set([])
  }
}
