import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "http://localhost:3000",
    credentials: true,
  });
  const config = await app.get(ConfigService);
  const port = config.get<number>("API_PORT");
  await app.listen(port || 5000, () => {
    console.log(`App started on port: ${port}`);
  });
}

bootstrap();
