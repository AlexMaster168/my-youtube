import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  app.enableCors({
    origin: config.get<string>("CLIENT_URL"),
    credentials: true,
  });
  const port = config.get<number>("API_PORT");
  await app.listen(port || 5000, () => {
    console.log(`App started on port: ${port}`);
  });
}

bootstrap();
