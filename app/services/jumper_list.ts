export class JumperListService {
  jumpers:any[] = [{
    id: 1,
    name: 'Juan Carrizo Ibarra',
    jumps: '192',
    points: '1505'
  }, {
    id: 2,
    name: 'Vicen Carrizo Ibarra',
    jumps: '46',
    points: '471'
  }, {
    id: 3,
    name: 'Marta Carrizo Ibarra',
    jumps: '149',
    points: '891'
  }];

  add(value:any):void {
    this.jumpers.push(value);
  }

  all():any[] {
    return this.jumpers;
  }
}
