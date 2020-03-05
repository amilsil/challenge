import {createInterface, Interface} from 'readline';
import {IInputOutput} from './../types';

export class ConsoleIO implements IInputOutput {
  private readonly reader: Interface;
  constructor() {
    this.reader = createInterface(process.stdin, process.stdout);
  }

  public close() {
    this.reader.close();
  }

  public input(question: string): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        this.reader.question(`${question}: `, answer => {
          resolve(answer);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  output(message: string) {
    console.log(message);
  }
}
