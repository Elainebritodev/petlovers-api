class InvalidCredentialsException extends Error {
  constructor() {
    super();
    this.message = 'Invalid email or passaword credentials';
    this.status = 400;
  }
}

export default InvalidCredentialsException;
