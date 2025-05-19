{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "nu-node-angular-shell";

  buildInputs = with pkgs; [
    nushell
    nodejs
    nodePackages."@angular/cli"
  ];

  shellHook = ''
    echo "Starting Nushell..."
    exec nu
  '';
}
