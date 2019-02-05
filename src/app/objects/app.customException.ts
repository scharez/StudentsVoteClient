export class CustomException {

  constructor(
    public statusCode: number = 0,
    public error: string = '',
    public message: string = ''
  ) {}

}
