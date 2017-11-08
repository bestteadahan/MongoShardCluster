for dir in shard1 shard2 shard3 configsvr
do
	mkdir $dir && chmod 767 -R $dir
done