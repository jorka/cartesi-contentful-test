/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: [
    "intro",
    {
      type: "category",
      label: "Cartesi Machine",
      items: [
        "machine/intro",
        {
          type: "category",
          label: "Host perspective",
          items: [
            "machine/host/overview",
            "machine/host/cmdline",
            "machine/host/lua"
          ]
        },
        {
          type: "category",
          label: "Target perspective",
          items: [
              "machine/target/overview",
              "machine/target/linux",
              "machine/target/architecture"
          ]
        },
        {
          type: "category",
          label: "Blockchain perspective",
          items: [
              "machine/blockchain/intro",
              "machine/blockchain/hash",
              "machine/blockchain/vg"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Descartes SDK",
      items: [
        "descartes/overview",
        "descartes/how",
        "descartes/architecture",
        "descartes/wallet",
        "descartes/timeline",
        "descartes/machine-offchain",
        "descartes/machine-onchain",
        "descartes/api",
        "descartes/instantiate",
        "descartes/drives",
        "descartes/provider",
        "descartes/logger_drive",
        //"descartes/off-chain-api",
        //"descartes/workflow",
        "descartes/topologies",
        //"descartes/services",
        "descartes/supported-networks"
      ]
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        "tutorials/introduction",
        "tutorials/requirements",
        "tutorials/descartes-env",
        {
          type: "category",
          label: "Hello World DApp",
          items: [
            "tutorials/helloworld/create-project",
            "tutorials/helloworld/cartesi-machine",
            "tutorials/helloworld/instantiate",
            "tutorials/helloworld/getresult",
            "tutorials/helloworld/deploy-run"
          ]
        },
        {
          type: "category",
          label: "Calculator DApp",
          items: [
            "tutorials/calculator/create-project",
            "tutorials/calculator/cartesi-machine",
            "tutorials/calculator/full-dapp"
          ]
        },
        {
          type: "category",
          label: "Generic Script DApp",
          items: [
            "tutorials/generic-script/create-project",
            "tutorials/generic-script/custom-rootfs",
            "tutorials/generic-script/cartesi-machine",
            "tutorials/generic-script/full-dapp"
          ]
        },
        {
          type: "category",
          label: "GPG Verify DApp",
          items: [
            "tutorials/gpg-verify/create-project",
            "tutorials/gpg-verify/ext2-gpg",
            "tutorials/gpg-verify/cartesi-machine",
            "tutorials/gpg-verify/full-dapp",
            "tutorials/gpg-verify/larger-files"
          ]
        },
        {
          type: "category",
          label: "Dogecoin Hash DApp",
          items: [
            "tutorials/dogecoin-hash/create-project",
            "tutorials/dogecoin-hash/scrypt-c",
            "tutorials/dogecoin-hash/cartesi-machine",
            "tutorials/dogecoin-hash/full-dapp"
          ]
        }
      ]
    }
  ]
};
