
# Purge the current folder
rm -R -f ../public/tutorials/lessons/*
mkdir tmp

# Download the docs folder
curl  -H "Authorization: Basic ${TOKEN}" \
  -L "https://api.github.com/repos/solidjs/solid-docs/tarball/main" > lessons.tar.gz

tar -zxvf lessons.tar.gz --strip-components=1 -C ./tmp

# Move all necessary files
mv ./tmp/en/tutorials/* ../public/tutorial/lessons/en
mv ./tmp/ja/tutorials/* ../public/tutorial/lessons/ja
mv ./tmp/zh-cn/tutorials/* ../public/tutorial/lessons/zh-cn

# Clean up temp directory
# rm lessons.tar.gz
# rm -R -f tmp
