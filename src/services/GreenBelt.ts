class GreenBeltti {
  static async getUsuario() {
    return new Promise((resolve) => setTimeout(() => resolve(null), 2000));
  }
}

export default GreenBeltti;
