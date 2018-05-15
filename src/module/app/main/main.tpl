
<div id="main" class="container">
  <div class="items">
  {{each data.items as item}}
    <div class="item" data-route="/step4">
      <div class="avater">
        <div class="image"></div>
        <div class="mask" data-complete="0"></div>
        <div class="title">{{item.title}}</div>
      </div>
      <p>{{item.desc}}</p>
    </div>
  {{/each}}
    <div id="add" class="item" data-route="/step1">
      <div class="avater">
        +
      </div>
    </div>
  </div>
</div>