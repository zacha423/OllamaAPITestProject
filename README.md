# OllamaAPITestProject
A basic DevContainer setup and web page to test API responses using Ollama.

# Installation
This repo is setup for use with NVIDIA cards and Docker containers.
1. Install the [NVIDIA Container Toolkit (CTK)](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) on the host device.  
>WSL2 Users take note you may need to run an [extra command](https://github.com/NVIDIA/nvidia-container-toolkit/issues/363) to configure the CTK.  
`sudo nvidia-ctk runtime configure --runtime=docker --config /mnt/<windows drive>/Users/<your user>/.docker/daemon.json`
2. Install Docker/Docker Desktop on the host device.

## Running the web server
1. `cd ollamaapp`
2. `npm install`
3. `node index.js`  

Navigate to `localhost:3000` on the host machine. Ollama is running on port `11434` in a separate container.
## Using the sample web page.
1. Pull the model specified in the `MODEL` variable (index.html).
2. Enter a prompt into the text box.
3. Click *Submit* and wait for the output to be displayed on the page.
>A RTX 2060, Ryzen 5 2600, 24GB DDR4 took ~4 minutes to create a response when first run. Subsequent runs do not take as long.
## Additional Resources
[Ollama API Reference](https://github.com/ollama/ollama/blob/main/docs/api.md#pull-a-model)  
[ollama/ollama](https://github.com/ollama/ollama)  
[valiantlynx/ollama-docker](https://github.com/valiantlynx/ollama-docker)
