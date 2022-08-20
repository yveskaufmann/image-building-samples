# Consume this container images

## Docker CLI

1. Create Personal Access Token with read:packages permissions.

2. Login via: `echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin`

## Kubernetes

Create image pull secret: 

```sh 
k create -n production secret docker-registry ghcr-yveskaufmann --docker-server ghcr.io --docker-username yveskaufmann --docker-password="$(pbpaste)"
```

Assign the pull secret to the used service account: 

```sh 
kubectl patch serviceaccount default \
  -p "{\"imagePullSecrets\": [{\"name\": \"image-pull-secret\"}]}" \
  -n <your-namespace>
```