![Screenshot_2024-06-09-00-37-27-47_8c90bb820ecf12bb620c53b61014a1ba](https://github.com/wevm/wagmi/assets/164274667/d6be5546-2395-49ab-ae2f-d8188ccdffa1)
![IMG20240607015737_01](https://github.com/wevm/wagmi/assets/164274667/b5d1c88e-2be0-44a9-9c12-a1c4ad0efcd1)
![qr-bc1qssvhdpze9npj5sm2u9ks4keu5nus0vuds4vfxx](https://github.com/wevm/wagmi/assets/164274667/f3a9a7fa-e760-4405-8401-539a36add4c0)
![OKX_1718004537181](https://github.com/wevm/wagmi/assets/164274667/ff7f0002-8caf-4c0e-a016-9caa41b5aa14)
![OKX_1718000381352](https://github.com/wevm/wagmi/assets/164274667/4d9b95b8-e877-4238-8632-38bed3474645)
![OKX_1717984604196](https://github.com/wevm/wagmi/assets/164274667/78938bff-a0d7-465a-a712-56a5493c2d7b)
![OKX_1718000483828](https://github.com/wevm/wagmi/assets/164274667/be5fb5a1-6588-4779-af35-7165283ae4fe)
![OKX_1718000648722](https://github.com/wevm/wagmi/assets/164274667/3fa54792-be86-4985-a820-773661743a95)
![OKX_1718000814343](https://github.com/wevm/wagmi/assets/164274667/913c1581-28b0-42e9-be21-5661fe6f317b)
![Screenshot_2024-06-13-03-27-57-66_40deb401b9ffe8e1df2f1cc5ba480b12](https://github.com/wevm/wagmi/assets/164274667/45440563-f6ab-44f1-807a-341677eee1a3)
![Screenshot_2024-06-13-03-27-57-19_40deb401b9ffe8e1df2f1cc5ba480b12](https://github.com/wevm/wagmi/assets/164274667/aa2b02dc-d9d6-4110-9164-b7e2cb693120)
![OKX_1718177533458](https://github.com/wevm/wagmi/assets/164274667/c43bd9d6-4f02-4224-a7c1-025f7e78b7ab)
![Screenshot_2024-06-23-14-38-46-80_1a01c1dfc8c0ea31a9d50a905953499e](https://github.com/wevm/wagmi/assets/164274667/62c11cb6-7ad2-4f70-a70a-addf5466fc93)
![OKX_1717984604196](https://github.com/wevm/wagmi/assets/164274667/1f0d4593-6dcf-4305-aba0-d6cf893e0e42)
![OKX_1718000381352](https://github.com/wevm/wagmi/assets/164274667/cd61cfd3-bdd7-4e80-96b4-5470dcd0cc98)
![OKX_1718000483828](https://github.com/wevm/wagmi/assets/164274667/de189f5b-f150-4b89-8e6e-e0b464706807)
![OKX_1718000648722](https://github.com/wevm/wagmi/assets/164274667/e8e469a5-95f3-417c-8088-b3c14b074344)
![OKX_1718000814343](https://github.com/wevm/wagmi/assets/164274667/8095ca3d-e443-4f27-9837-fe111e75dd1d)
![OKX_1718004537181](https://github.com/wevm/wagmi/assets/164274667/adb01baf-3376-44aa-9824-c4f8fbcb1fb4)
![OKX_1718177533458](https://github.com/wevm/wagmi/assets/164274667/c65590c6-0000-4611-84a4-0b9de333eac7)
![1718499448641](https://github.com/wevm/wagmi/assets/164274667/d6fa3d39-fa05-4223-af9f-68b3e269a208)
![Screenshot_2024-06-23-14-38-57-57_1a01c1dfc8c0ea31a9d50a905953499e](https://github.com/wevm/wagmi/assets/164274667/3bc827a0-2b63-4805-aff9-f4f5e6681f7b)
![Screenshot_2024-06-23-14-38-46-80_1a01c1dfc8c0ea31a9d50a905953499e](https://github.com/wevm/wagmi/assets/164274667/727b4708-f7fa-47f8-99ed-39fc9ebf3e5e)
[trade-history (1).csv](https://github.com/user-attachments/files/16059349/trade-history.1.csv)
[export-tokentxns-1717744195419.csv](https://github.com/user-attachments/files/16059348/export-tokentxns-1717744195419.csv)
[export-tokentxns-1717963681213.csv](https://github.com/user-attachments/files/16059347/export-tokentxns-1717963681213.csv)
[QmXW2zpCEjBvXmUvjbZx89KZufrxqQYBMKVtaJE8hv7L3r (2).pdf](https://github.com/user-attachments/files/16059346/QmXW2zpCEjBvXmUvjbZx89KZufrxqQYBMKVtaJE8hv7L3r.2.pdf)
# create-wagmi

## Overview

create-wagmi is a command line interface (CLI) for scaffolding new Wagmi projects.

## Usage

::: code-group
```bash [pnpm]
pnpm create wagmi
```
```bash [npm]
npm create wagmi@latest
```
```bash [yarn]
yarn create wagmi
```
```bash [bun]
bun create wagmi
```
:::

## Options

### `-t`, `--template`

By default, `create-wagmi` scaffolds a basic Vite application with Wagmi. However, you can specify a custom [template](#templates) by passing the `--template`/`-t` flag:

::: code-group
```bash [pnpm]
pnpm create wagmi --template next
```
```bash [npm]
npm create wagmi@latest --template next
```
```bash [yarn]
yarn create wagmi --template next
```
```bash [bun]
bun create wagmi --template next
```
:::

### `--bun`/`--npm`/`--pnpm`/`--yarn`

Use a specific package manager to install dependencies. By default, `create-wagmi` will use the package manager you used to run the command.

### `-h`, `--help`

Prints the help message.

### `-v`, `--version`

Prints the CLI version.

## Templates

`create-wagmi` currently comes with the following templates:

- `next`: A Next.js Wagmi project.
- `nuxt`: A Nuxt Wagmi project.
- `vite-react` (default): A Vite (React) Wagmi project.
- `vite-vanilla`: A Vite Wagmi Core project.
- `vite-vue`: A Vite (Vue) Wagmi project.
