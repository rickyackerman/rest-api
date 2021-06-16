# Clone Project
```
git clone https://github.com/rickyackerman/rest-api.git
```
# Install node module
```
npm install
```
# Koneksi ke mongodb
```
Buat file .env di folder root dengan isian 
HOST=127.0.0.1 (optional)
PORT=8000 (optional)
MONGODB_URI=//link-ke-mongodb (wajib)
```

# Test koneksi
```
yarn db:test
```

# Import sample data
```
yarn db:import
```

