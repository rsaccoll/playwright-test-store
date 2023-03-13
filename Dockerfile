FROM mcr.microsoft.com/playwright:v1.31.0-focal

# Copy from current directory to `/e2e`
COPY . /e2e

# Sets working directory to `/e2e`
WORKDIR /e2e

# Install dependencies
RUN npm install
RUN npx playwright install chromium

CMD ["npx", "playwright", "test"]