{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.rustc
    pkgs.rustup
    pkgs.cargo
    pkgs.openssl
    pkgs.pkg-config
  ];
}
