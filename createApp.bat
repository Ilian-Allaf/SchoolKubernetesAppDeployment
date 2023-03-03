kubectl apply -f deployments/database_deployment.yaml
kubectl apply -f deployments/back_deployment.yaml
::kubectl apply -f deployments/test.yaml
kubectl apply -f services/database-service.yaml
kubectl apply -f services/back-service.yaml
::kubectl apply -f services/front-service.yaml
minikube service backend-service -n web-app --url