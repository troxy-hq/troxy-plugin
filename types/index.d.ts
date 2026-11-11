export type BarLine = string | null
export type ModArm = 'treated' | 'holdout' | null
export type SessionSaved = { paid: number; full: number; meter: Record<string, number> }

declare module 'claude-code' {
  interface PluginState {
    'troxy-guard': { line: BarLine; saved: SessionSaved; compacted: BarLine; savings: BarLine; route: BarLine; arm: ModArm; connect: BarLine }
  }
}
