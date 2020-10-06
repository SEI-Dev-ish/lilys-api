#!/bin/bash

API="http://localhost:4741"
URL_PATH="/orders"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "order": {
      "name": "'"${NAME}"'",
      "quanity": "'"${QUANITY}"'",
      "price": "'"${PRICE}"'",
      "completed" "'"${COMPLETED}"'",
      "owner" "'"${OWNER}"'"
    }
  }'

echo
