<script setup lang="ts">
useSeoMeta({
  title: '铁人战队·智能车',
  description: '铁人战队智能车官方网站。提供智能车相关的教程、软件下载、比赛信息等。',
})

const teams = [
  ['控制算法组', '负责自动控制算法的设计与实现，根据不同的传感器与执行器设计不同的软件方案。'],
  ['电机与电源组', '负责电机与电源的选型、电机驱动设计、电机控制算法实现、电源模块电路设计等工作。'],
  ['框架与规范组', '主要负责制定技术规范，同时维护公用代码模块和通用信号接口设计。'],
  ['传感器算法组', '负责根据具体需求搭配传感器方案，并研究传感器数据的二次处理技术。'],
]

const milestones = [
  ['2022 年', ['智能车：国赛一等奖 1 项', '智能车：国赛二等奖 1 项', '智能车：西部一等奖 2 项']],
  ['2021 年', ['智能车：国赛二等奖 2 项', '智能车：西部一等奖 2 项']],
  ['2020 年', ['智能车：国赛一等奖 1 项', '智能车：国赛二等奖 1 项', '智能车：西部一等奖 2 项']],
  ['2019 年', ['智能车：国赛一等奖 1 项', '智能车：国赛二等奖 3 项', '智能车：西部一等奖 4 项']],
  ['2018 年', ['智能车：国赛三等奖 1 项', '智能车：西部一等奖 1 项']],
  ['2015 年', ['铁人战队成立']],
]
</script>

<template>
  <main>
    <section class="home-hero">
      <div class="hero-inner">
        <img class="hero-logo" src="/images/iron-logo.png" alt="铁人战队标志">
        <h1>铁人战队·智能车团队</h1>
        <p>在这里追随学长学姐们坚定不移的脚步，见证梦想得到实现，见证付出得到回报，信任彼此，互相配合，力臻完美，追求巅峰。</p>
        <div class="hero-actions">
          <NuxtLink class="button primary" to="/docs/smartcar/prologue/01-how-to-ask-question/">开始阅读文档</NuxtLink>
          <NuxtLink class="button" to="/blog/">查看团队动态</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section-band">
      <div class="section-inner section-grid">
        <div>
          <h2>以智能车竞赛为主的团队</h2>
          <p class="lead">我们是一个以智能车为主的团队，主要目标是参加全国大学生智能车竞赛。除此以外我们也参加全国大学生电子设计大赛、四川省机器人大赛等赛事，并在实践中积累经验。</p>
        </div>
        <img src="/images/landing-intro-1.png" alt="智能车在赛道上行驶">
      </div>
    </section>

    <section class="section-band alt">
      <div class="section-inner">
        <h2>队伍结构组成与管理</h2>
        <p class="lead">我们根据比赛内容对应的人员需求划分小组，每个组均有组长负责组内工作安排与进度管理。</p>
        <div class="feature-grid">
          <article v-for="team in teams" :key="team[0]" class="feature-card">
            <h3>{{ team[0] }}</h3>
            <p>{{ team[1] }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-band">
      <div class="section-inner">
        <h2>时间线</h2>
        <p class="lead">这里记录了团队取得的成绩，以及团队发展中的大事记。</p>
        <ul class="timeline">
          <li v-for="milestone in milestones" :key="milestone[0]">
            <strong>{{ milestone[0] }}</strong>
            <div>
              <div v-for="item in milestone[1]" :key="item">{{ item }}</div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="section-band alt">
      <div class="section-inner section-grid">
        <div>
          <h2>那么现在，考虑加入我们？</h2>
          <p class="lead">欢迎加入招新 QQ 群，也欢迎关注团队动态，了解智能车学习路线、招新安排和阶段性考核内容。</p>
          <div class="hero-actions">
            <NuxtLink class="button primary" to="/blog/recruitment-plan/">查看招新活动</NuxtLink>
          </div>
        </div>
        <img src="/images/group-qr.png" alt="招新 QQ 群二维码">
      </div>
    </section>
  </main>
</template>