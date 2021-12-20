# Nomos Core

## Quick Start

To learn more before you start working with icptree, see the following documentation available online:

- [Quick Start](https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Motoko Programming Language Guide](https://sdk.dfinity.org/docs/language-guide/motoko.html)
- [Motoko Language Quick Reference](https://sdk.dfinity.org/docs/language-guide/language-manual.html)
- [JavaScript API Reference](https://erxue-5aaaa-aaaab-qaagq-cai.raw.ic0.app)

### Step0

0.install vessel

1.Download the binary file from [https://github.com/dfinity/vessel/releases/](https://github.com/dfinity/vessel/releases/)

2.Open the `/usr/local/bin` directory via terminal, hold the binary and drag it into this directory

3.Then source the configuration file, if you are using zsh, you can run: `source ~/.zshrc`

### Step1

```bash
npm install or npm install --legacy-peer-deps
```

### Step2

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:8000?canisterId={asset_canister_id}`.

Additionally, if you are making frontend changes, you can start a development server with

### Step3

```bash
npm run dev
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 8000.

### Deploy to IC

```bash
sudo dfx deploy --no-wallet --network ic
```

### [Reference]

- [https://github.com/NnsDao/ICTexas-UI](https://github.com/NnsDao/ICTexas-UI)

- [https://github.com/metascore/tourney](https://github.com/metascore/tourney)
