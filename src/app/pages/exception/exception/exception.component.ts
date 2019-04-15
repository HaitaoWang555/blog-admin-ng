import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ConfigType  {
  img: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.less']
})

export class ExceptionComponent implements OnInit {

  config = {
    403: {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
      title: '403',
      desc: '抱歉，你无权访问该页面',
    },
    404: {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
      title: '404',
      desc: '抱歉，你访问的页面不存在',
    },
    500: {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
      title: '500',
      desc: '抱歉，服务器出错了',
    },
  };

  type = 500;
  configType: ConfigType = {
    img: '',
    title: '',
    desc: '',
  };

  constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.type = +this.route.snapshot.paramMap.get('type');
    this.configType = this.config[this.type];
  }

}
