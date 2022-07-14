#include <bits/stdc++.h>
using namespace std;
int main()
{
	int N,Num;
	cin>>N;
	queue<int> Q;
	for(int i=0;i<N;i++)
	{
		cin>>Num;
		Q.push(Num);
	}
	int a[N];
	for(int i=0;i<N;i++)
		cin>>a[i];
	int total_time = 0, executed_job = 0;
	while(!Q.empty())
	{
		int job = Q.front();
		if(job == a[executed_job]){
			Q.pop();
			total_time++;
			executed_job++;
		}
		else
		{
			Q.pop();
			Q.push(job);
			total_time++;
		}
	}
	cout<<total_time<<endl;
	return 0;
}