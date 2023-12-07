export interface ProcessHandle {
  run: (cipher: string) => Promise<string>
}
