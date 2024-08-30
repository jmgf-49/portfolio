<script>
  export let title;
  export let description;
  export let image = null;
  
</script>

<div class="card">
  {#if image !== null}
  <img src="{image}" alt="{title}" class="image">
  {/if}
  {#if description || title}
  <div class="content">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
  {/if}
  <div class="actions">
    <slot />
  </div>
</div><style>
  .card{
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1em;
    border-radius: 1em;
    background: var(--bg);
    width: 400px;
    aspect-ratio: 3/1;  
    box-shadow: 0 0 1em var(--dark-accent);
  }
  .image {
    border-radius: 1em 1em 0 0;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .content{
    padding: 0 1em 0 1em;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .actions{
    padding:  0 1em 1em 1em;
    background-color: var(--bg);
    border-radius: 1em;
  }
</style>