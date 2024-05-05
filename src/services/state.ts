const state = {
  role: '',
  prefix: '',
  setRole(newValue: string) {
    this.role = newValue;
  },
  clearRole() {
    this.role = '';
  },
  setPrefix(newValue: string) {
    this.prefix = newValue;
  },
  clearPrefix() {
    this.prefix = '';
  },
};

export default state;
