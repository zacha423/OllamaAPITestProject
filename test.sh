curl ollama:11434/api/pull -d '{"name":"gemma:2b"}'
curl ollama:11434/api/generate -d '{
  "model":"gemma:2b", 
  "prompt":"Why is the sky blue?",
  "stream":false
}'