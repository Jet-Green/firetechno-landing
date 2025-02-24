<template>
  <div class="roadmap">
    <h2 class="big-header" style="margin-top: 3rem; margin-bottom: 3rem">Наши преимущества:<br>почему выбирают нас?</h2>
    
    <!-- Desktop version -->
    <div class="roadmap-container">
      <div class="timeline">
        <div class="timeline-item">
          <div class="content left">
            <h3 class="small-header">Опыт</h3>
            <p>Многолетний опыт в сфере интернет-маркетинга.</p>
            <div class="underline"></div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="content right">
            <h3 class="small-header">Индивидуальный подход</h3>
            <p>Разработка решений, адаптированных под ваши задачи.</p>
            <div class="underline"></div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="content left">
            <h3 class="small-header">Качество</h3>
            <p>Гарантия высокого качества предоставляемых услуг.</p>
            <div class="underline"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.roadmap {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 4rem 2rem;
}

.roadmap-title {
  font-size: 3rem;
  margin-bottom: 6rem;
  font-weight: 700;
  line-height: 1.2;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.roadmap-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 6px;
  height: 95%;
  background-color: #ff3333;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 6rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

.point {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background-color: #ff3333;
  border-radius: 50%;
  z-index: 2;
}

.content {
  width: 45%;
  padding: 0;
  position: relative;
}

.content.left {
  text-align: right;
  margin-right: 50%;
  padding-right: 100px;
}

.content.right {
  text-align: left;
  margin-left: 50%;
  padding-left: 100px;
}

.content.left::after {
  right: 0;
}

.content.right::after {
  left: 0;
}

.content h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: white;
}

.content p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 1rem;
}

.underline {
  position: relative;
  height: 6px;
  background-color: #ff3333;
  margin-top: 1rem;
}

.underline::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #ff3333;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.content.left .underline {
  margin-left: auto;
}

.content.left .underline::after {
  right: -6px;
}

.content.right .underline::after {
  left: -6px;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .big-header{
    font-size: 20px !important;
  }
  .small-header{
    font-size: 20px !important;
  }
  .roadmap {
    padding: 2rem 1rem;
  }

  .roadmap-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 4rem;
  }

  .timeline::before {
    left: 30px;
    width: 4px;
  }

  .point {
    left: 30px;
  }

  .content {
    width: calc(100% - 80px);
    margin: 0 0 0 20px !important;
    text-align: left !important;
    padding: 0 0 0 40px !important;
  }

  .content::after {
    width: 40px;
    left: 0 !important;
    height: 4px;
  }

  .content h3 {
    font-size: 1.5rem;
  }

  .content p {
    font-size: 0.9rem;
  }

  .underline {
    margin-left: 0 !important;
  }

  .content.left .underline::after,
  .content.right .underline::after {
    left: -6px;
    right: auto;
  }
}
</style>