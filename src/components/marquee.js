<div id="marquee-container">
  <div id="marquee-wrapper"></div>
</div>

<style>
  #marquee-container {
    width: 100%;
    overflow: hidden;
    background: #eee;
    white-space: nowrap;
    box-sizing: border-box;
  }

  #marquee-wrapper {
    display: flex;
    width: max-content;
    animation: scroll-left 10s linear infinite;
  }

  .marquee-text {
    padding-right: 50px;
    white-space: nowrap;
    font-size: 1.2em;
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>

<script>
  const text = "Это бесконечная бегущая строка на JavaScript! ";
  const wrapper = document.getElementById('marquee-wrapper');

  for (let i = 0; i < 2; i++) {
    const span = document.createElement('div');
    span.className = 'marquee-text';
    span.textContent = text;
    wrapper.appendChild(span);
  }
</script>
