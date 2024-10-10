FROM node:20.11-bookworm

# Install pnpm
#RUN curl -fsSL https://get.pnpm.io/install.sh | sh -; node - add --global pnpm
RUN corepack enable; corepack prepare pnpm@9.3.0 --activate
