class LRUCache {
  private _length: number;
  private _data: Map<string, unknown>;

  constructor(length: number) {
    this._length = length;
    this._data = new Map();
  }

  get(key: string) {
    if (!this._data.has(key)) {
      return null;
    }
    const value = this._data.get(key);
    this._data.delete(key);
    this._data.set(key, value);
    return value;
  }

  set(key: string, value: unknown) {
    if (this._data.has(key)) {
      this._data.delete(key);
    }
    this._data.set(key, value);

    // 超过容量
    if (this._data.size > this._length) {
      const delKey = this._data.keys().next().value;
      this._data.delete(delKey);
    }
  }
}

export default LRUCache;
