import os
import httpx
import re
import urllib.parse
import datetime

def fetch_ci_time(filePath):
    entries = httpx.get("https://api.github.com/repos/lovezsh/weekly/commits?path=" + filePath + "&page=1&per_page=1")
    return entries

if __name__ == "__main__":
  readmefile=open('README.md','w')
  readmefile.write("## weekly\n\n网站: [https://weekly.zsh.im/](https://weekly.zsh.im/)\n\n> 一个周刊，记录有趣的软件和网站。欢迎 [投稿推荐](https://github.com/lovezsh/weekly/issues/)。\n")

  for root, dirs, filenames in os.walk('./docs/posts'):
    filenames = sorted(filenames, key=lambda x:float(re.findall("(\d+)",x)[0]), reverse=True)

  for index, name in enumerate(filenames):
      if name.endswith('.md'):
        filepath = urllib.parse.quote(name)
        oldTitle = name.split('.md')[0]
        url   = 'https://weekly.zsh.im/posts/' + oldTitle
        title = '第 ' + oldTitle.split('-')[0] + ' 期 - ' + oldTitle.split('-')[1]
        readmeMd= '* [{}]({})\n'.format(title, url)
        dateList = ["2022-10-10","2022-09-26","2022-09-12","2022-09-05","2022-08-29"]
        num = int(oldTitle.split('-')[0])
        if index < 5 :
          modified = fetch_ci_time('/docs/posts/' + filepath)

          recentMd= '* [{}]({}) - {}\n'.format(title, url, modified)
        readmefile.write(readmeMd)

  readmefile.close()
