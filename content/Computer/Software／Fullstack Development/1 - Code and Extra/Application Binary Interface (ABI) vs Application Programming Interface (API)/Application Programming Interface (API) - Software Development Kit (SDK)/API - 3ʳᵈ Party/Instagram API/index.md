---
title: "Instagram API"
created: 2026-06-14T03:32:34.936-05:00
modified: 2026-06-14T04:10:04.891-05:00
parent: "[[API - 3ʳᵈ Party]]"
children: []
---
# Resources
- [https://motley-stealer-5b1.notion.site/Post-to-IG-API-Tutorial-2721d8dcfa7e80a99523f03d0d658a5c](https://motley-stealer-5b1.notion.site/Post-to-IG-API-Tutorial-2721d8dcfa7e80a99523f03d0d658a5c)
- [https://www.youtube.com/watch?v=sPjlyDSNYQs](https://www.youtube.com/watch?v=sPjlyDSNYQs)

# Example API Calls

Create a container

> [!expand-ui]- Container Image
> ```
> curl -X POST "https://graph.instagram.com/v23.0/<account_id>/media" \
>   -H "Content-Type: application/json" \
>   -H "Authorization: Bearer TOKEN_HERE" \
>   -d '{
>     "image_url": "https://your-domain.com/path/to/your/image.jpg",
>     "media_type": "IMAGE",
>     "caption": "Your optional caption here"
>   }'
> ```

> [!expand-ui]- Video Container
> ```
> curl -X POST "https://graph.instagram.com/v23.0/<account_id>/media" \
>   -H "Content-Type: application/json" \
>   -H "Authorization: Bearer TOKEN_HERE" \
>   -d '{
>     "video_url": "https://res.cloudinary.com/dlzor5lap/video/upload/v1758201802/b4xfa8yel6chwqx7ou6j.mp4",
>     "media_type": "REELS"
>   }'
> ```

Publish container
```
curl -X POST "https://graph.instagram.com/v23.0/ACCOUNT_ID_HERE/media_publish" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN_HERE" \
  -d '{
    "creation_id": "CONTAINER_ID_HERE"
  }'
```
