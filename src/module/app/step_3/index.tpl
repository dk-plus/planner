
    <div id="step3" class="container">
      {{each data as item index}}
      <p>第{{index+1}}阶段</p>
      <div class="img-box">
        <div class="img"></div>
      </div>
      <p>详细目标</p>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <p>预计耗时</p>
      <div class="time">
        <input type="number" placeholder="天">
        <input type="number" placeholder="小时">
        <input type="number" placeholder="分钟">
      </div>
      {{/each}}
      <div class="full-btn" data-route="/">开始</div>
    </div>