
// Minimal helpers for GTM/GA4 demo
window.dataLayer = window.dataLayer || [];

// track CTA clicks
document.addEventListener('click', function(e){
  var a = e.target.closest('[data-gtm]');
  if(!a) return;
  window.dataLayer.push({event:'cta_click', cta_id:a.getAttribute('data-gtm')});
});

// visible time per page (fires after 60s of actual visibility)
(function(thresholdMs){
  var visible = !document.hidden, acc = 0, step = 1000, done = false, t;
  function tick(){
    if(done) return;
    if(visible){
      acc += step;
      if(acc >= thresholdMs){
        done = true;
        window.dataLayer.push({event:'visible_time_reached', visible_time_ms:acc, threshold_ms:thresholdMs});
        clearInterval(t);
      }
    }
  }
  document.addEventListener('visibilitychange', function(){ visible = !document.hidden; });
  t = setInterval(tick, step);
})(60000);
