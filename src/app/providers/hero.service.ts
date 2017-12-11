export class Hero {
  constructor(public name: string, public url: string ,public state = 'inactive') { }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}